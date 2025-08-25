import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const ChatBotScreen = () => {
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello! 👋 I'm your bot. How can I help you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { id: Date.now().toString(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Add temporary typing message
    const typingId = "typing-" + Date.now();
    const typingMsg = { id: typingId, text: "Typing...", sender: "bot", typing: true };
    setMessages((prev) => [...prev, typingMsg]);

    setTimeout(() => {
      // Replace typing message with actual reply
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === typingId
            ? { id: Date.now().toString(), text: `FoodRun Bot: "${userMsg.text}" 🤖`, sender: "bot" }
            : msg
        )
      );
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={80}
    >
      <View style={styles.container}>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.message,
                item.sender === "user" ? styles.userMessage : styles.botMessage,
              ]}
            >
              <Text style={[styles.messageText, item.typing && styles.typingText]}>
                {item.text}
              </Text>
            </View>
          )}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Type a message..."
          />
          <TouchableOpacity onPress={handleSend} style={styles.sendBtn}>
            <Text style={{ color: "#fff" }}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatBotScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f7f7f7", padding: 10 },
  message: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 4,
    maxWidth: "80%",
  },
  userMessage: { alignSelf: "flex-end", backgroundColor: "#dcf8c6" },
  botMessage: { alignSelf: "flex-start", backgroundColor: "#fff" },
  messageText: { fontSize: 16 },
  typingText: { fontStyle: "italic", color: "gray" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
    marginRight: 9,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  sendBtn: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
});
