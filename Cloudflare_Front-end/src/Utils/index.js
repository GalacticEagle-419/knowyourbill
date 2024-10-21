import * as dummy_chat from "../Constants/dummy_chat";
import * as Constants from "../Constants";

function cleanString(str) {
    return str
        .toLowerCase()                // Convert to lowercase
        .replace(/[^a-z0-9@.]/g, ""); // Remove special characters, keep @ and .
}

function getLevenshteinDistance(a, b) {
    const matrix = [];

    // Initialize the first row and column of the matrix
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Fill the matrix
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1]; // No change needed
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // Substitution
                    matrix[i][j - 1] + 1,     // Insertion
                    matrix[i - 1][j] + 1      // Deletion
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

function getSimilarityPercentage(str1, str2) {
    const cleanedStr1 = cleanString(str1);
    const cleanedStr2 = cleanString(str2);

    // Exact match: Return 100% if the word sequences are identical
    if (cleanedStr1 === cleanedStr2) {
        return 100.00;
    }

    const distance = getLevenshteinDistance(cleanedStr1, cleanedStr2);
    const maxLength = Math.max(cleanedStr1.length, cleanedStr2.length);
    const similarity = ((maxLength - distance) / maxLength) * 100;
    return similarity.toFixed(2); // Return percentage with 2 decimal places
}

export const getPromptResponseMessages = (response) => {
    /**
     * Parse the response messages from langflow API response
     * 
     * @param {*} response 
     * @returns Array of messages
     */
    let messages = []
    response.outputs.forEach(output => {
        output.outputs.forEach(_output => {
            messages = messages.concat(_output.messages)
        })
    });
    return messages
}

export const getMachineResponseForUserInput = (userMessage) => {
    /**
     * Get the machine message for the user message based on most similar user message
     * 
     * @param {*} userMessage 
     * @returns Machine message
     */

    // Get user messages with similarity >= 50
    const userChats = dummy_chat.dummy_chat_messages.filter(message => message.sender === 'User')
    let filteredChats = userChats.map(chat => {
        chat.similarity = getSimilarityPercentage(chat.message, userMessage)
        return chat
    })
    filteredChats = filteredChats.filter(chat => chat.similarity >= Constants.SIMILARITY_CONFIDENCE_PERCENTAGE)

    // Get machine messages based on the most similar user message
    let machineDummyChats = []
    if (filteredChats.length != 0) {
        const maxSimilarityChat = filteredChats.reduce((prev, current) => {
            return (prev.similarity > current.similarity) ? prev : current
        })
        machineDummyChats = dummy_chat.dummy_chat_messages.filter(message => message.id === maxSimilarityChat.id && message.sender === 'Machine')
    } else {
        machineDummyChats = [{ sender: "Machine", message: Constants.PREMIUM_FEATURE_MESSAGE }]
    }
    return machineDummyChats;
}