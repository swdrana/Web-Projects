import React from "react";
import { CustomChat, FacebookProvider } from "react-facebook";
function CustomerChat() {
  return (
    <FacebookProvider appId="1184899329559971" chatSupport>
      <CustomChat pageId="105274921383668" minimized={true} />
    </FacebookProvider>
  );
}

export default CustomerChat;
