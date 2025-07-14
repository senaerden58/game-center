import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, TextField, IconButton, Button, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function Chat() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), text: input }]);
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {open ? (
        <Box
          sx={{
            position: "fixed",
            top: 64, // Navbar height (MUI default AppBar 64px)
            right: 24,
            width: 320,
            maxHeight: "300px",
            bgcolor: theme.palette.background.paper,
            borderRadius: 2,
            boxShadow: theme.shadows[5],
            display: "flex",
            flexDirection: "column",
            border: `1px solid ${theme.palette.divider}`,
            zIndex: 1300,
            overflow: "hidden",
            fontFamily: "'Press Start 2P', cursive",
          }}
        >
          {/* Başlık ve kapatma butonu */}
          <Box
            sx={{
              px: 2,
              py: 1,
              borderBottom: `1px solid ${theme.palette.divider}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: theme.palette.mode === "dark" ? "primary.dark" : "primary.light",
              color: theme.palette.primary.contrastText,
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Sohbet
            </Typography>
            <IconButton
              size="small"
              onClick={() => setOpen(false)}
              sx={{ color: theme.palette.primary.contrastText }}
              aria-label="Sohbeti kapat"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Mesaj listesi */}
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              px: 2,
              py: 1,
              backgroundColor: theme.palette.mode === "dark" ? "#222" : "#f9f9f9",
              fontSize: "0.75rem",
              fontWeight: "bold",
            }}
          >
            {messages.length === 0 ? (
              <Typography color="text.secondary" align="center" sx={{ mt: 8 }}>
                Henüz mesaj yok. Başlayın!
              </Typography>
            ) : (
              messages.map((msg) => (
                <Box
                  key={msg.id}
                  sx={{
                    mb: 1,
                    px: 1,
                    py: 0.5,
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    borderRadius: 1,
                    maxWidth: "80%",
                    wordBreak: "break-word",
                    fontSize: "0.8rem",
                  }}
                >
                  {msg.text}
                </Box>
              ))
            )}
            <div ref={messagesEndRef} />
          </Box>

          {/* Mesaj input ve gönderme */}
          <Box
            sx={{
              px: 2,
              py: 1,
              borderTop: `1px solid ${theme.palette.divider}`,
              display: "flex",
              gap: 1,
              bgcolor: theme.palette.background.paper,
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Mesaj yaz..."
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              sx={{
                "& .MuiOutlinedInput-root": {
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                },
              }}
              autoComplete="off"
            />
            <Button variant="contained" size="small" onClick={sendMessage}>
              Gönder
            </Button>
          </Box>
        </Box>
      ) : (
        // Küçük açma butonu, navbar altına yakın sağda
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            position: "fixed",
            top: 72,
            right: 24,
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            boxShadow: theme.shadows[4],
            "&:hover": {
              bgcolor: theme.palette.primary.dark,
            },
            zIndex: 1300,
          }}
          aria-label="Sohbeti aç"
        >
          <ChatBubbleOutlineIcon />
        </IconButton>
      )}
    </>
  );
}
