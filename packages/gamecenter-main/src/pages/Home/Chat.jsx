import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function Chat() {
  const theme = useTheme(); //tema renklerine ulaşmak için
  const [open, setOpen] = useState(true); //açık mı kapalı mı?
  const [messages, setMessages] = useState([]); //gönderilen mesajlar array şeklinde tutulur.
  const [input, setInput] = useState(""); //mesajların geçici tutulduğu yer.
  const messagesEndRef = useRef(null); //değişken gibi çalışır, değer saklar. Ama yeniden render olsa bile değeri kaybolmaz.

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = () => {
    if (!input.trim()) return; //boş mu kontrolü
    setMessages((prev) => [...prev, { id: Date.now(), text: input }]); //yeni mesajı ekler.
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage(); //enter ile mesaj gönderilebilir.
  };

  return (
    <>
      {open ? (
        <Box
          sx={{
            position: "fixed", //sağ üste sabitli
            top: 68,
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
            overflow: "hidden", //taşan içeriği sakladım
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
              bgcolor:
                theme.palette.mode === "dark"
                  ? "primary.dark"
                  : "primary.light",
              color: theme.palette.primary.contrastText,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              Sohbet
            </Typography>

            <IconButton
              size="small"
              onClick={() => setOpen(false)}
              sx={{ color: "white" }}
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
              backgroundColor:
                theme.palette.mode === "dark" ? "#222" : "#f9f9f9",
              fontSize: "0.75rem",
              fontWeight: "bold",
            }}
          >
            {messages.length === 0 ? (
              <Typography color="text.primary" align="center" sx={{ mt: 8 }}>
                Henüz mesaj yok. Başlayın!
              </Typography>
            ) : (
              messages.map((msg) => (
                <Box
                  key={msg.id}
                  sx={{
                    mb: 1, //margin bottom=8px
                    px: 1, //padding-left -right ->iç boşluklar
                    py: 0.5, //padding-top-bottom  ->iç boşluklar
                    bgcolor: theme.palette.primary.main,
                    color: "white",
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
              px: 1,
              py: 0.1,
              borderTop: `1px solid ${theme.palette.divider}`,
              display: "flex",
              gap: 2,
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
              onKeyPress={handleKeyPress} //klavyede tuşa basınca çalışır.
              autoComplete="off"
            />
            <Button variant="contained" size="small" onClick={sendMessage}>
              Gönder
            </Button>
          </Box>
        </Box>
      ) : (
        
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            position: "fixed",
            top: 78,
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
