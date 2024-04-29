function jsonValueKey(jsonString, key) {
    try {
        const jsonObject = JSON.parse(jsonString);
        return jsonObject[key];
    } catch (error) {
        console.error('Erreur lors de l\'analyse JSON :', error);
        return null;
    }
}