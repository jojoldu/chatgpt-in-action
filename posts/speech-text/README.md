# Speech To Text

```bash
curl --request POST \
  --url https://api.openai.com/v1/audio/transcriptions \
  --header 'Authorization: Bearer TOKEN' \
  --header 'Content-Type: multipart/form-data' \
  --form file=@/path/to/file/openai.mp3 \
  --form model=whisper-1
```

