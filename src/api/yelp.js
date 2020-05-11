import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer JQenmJ03HkR2DLxInic43vYpNZYR5WOPDBhQ4TVRm2tMCMOGfb1nw7jWg3UUOLZ6CW_k2jpFSWyaxsqaFFfcO7kUUxg4ZKH5yGBi6CuQxHfbkL3MxITuk6KbUz24XnYx",
  },
});
