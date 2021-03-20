<template>
  <div>
    <v-footer app light color="themeCHR">
      <!-- <span>{{ $getTrad('application.copyrightFooter') }}</span> -->
      <v-spacer />
      <div>
        <beautiful-chat
          :participants="participants"
          :titleImageUrl="titleImageUrl"
          :onMessageWasSent="onMessageWasSent"
          :messageList="messageList"
          :newMessagesCount="newMessagesCount"
          :isOpen="isChatOpen"
          :close="closeChat"
          :icons="icons"
          :open="openChat"
          :showEmoji="true"
          :showFile="true"
          :showEdition="false"
          :showDeletion="false"
          :deletionConfirmation="true"
          :showTypingIndicator="showTypingIndicator"
          :showLauncher="true"
          :showCloseButton="true"
          :colors="colors"
          :alwaysScrollToBottom="alwaysScrollToBottom"
          :disableUserListToggle="false"
          :messageStyling="messageStyling"
        />
      </div>
      <!-- <v-btn @click="$vuetify.goTo(0)" color="primary" fab x-small dark>
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn> -->
    </v-footer>
  </div>
</template>

<script>
import Chat from 'vue-beautiful-chat'
import CloseIcon from '@/assets/img/chatbox/close-icon.png'
import OpenIcon from '@/assets/img/chatbox/logo-no-bg.svg'
import FileIcon from '@/assets/img/chatbox/file.svg'
import CloseIconSvg from '@/assets/img/chatbox/close.svg'
import Vue from 'vue'
Vue.use(Chat)

export default {
  name: 'app',
  data() {
    return {
      icons: {
        open: {
          img: OpenIcon,
          name: 'default'
        },
        close: {
          img: CloseIcon,
          name: 'default'
        },
        file: {
          img: FileIcon,
          name: 'default'
        },
        closeSvg: {
          img: CloseIconSvg,
          name: 'default'
        }
      },
      participants: [
        {
          id: 'user1',
          name: "Romain d'ID3I",
          imageUrl: 'https://avatars3.githubusercontent.com/u/1915989?s=230&v=4'
        }
      ],
      titleImageUrl:
        'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: [
        {
          type: 'text',
          author: `user1`,
          data: {
            text: 'Bonjour !'
          }
        },
        {
          type: 'text',
          author: `user1`,
          data: {
            text:
              "Vous pouvez nous envoyer vos remarques, bugs ou idées d'améliorations de notre plateforme"
          }
        }
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 1,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#DE7036',
          text: '#ffffff'
        },
        launcher: {
          bg: '#DE7036'
        },
        messageList: {
          bg: '#ffffff'
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff'
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222'
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867'
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    }
  },
  methods: {
    sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen
          ? this.newMessagesCount
          : this.newMessagesCount + 1
        this.onMessageWasSent({
          author: 'support',
          type: 'text',
          data: { text }
        })
      }
    },
    onMessageWasSent(message) {
      // called when the user sends a message
      this.messageList = [...this.messageList, message]
    },
    openChat() {
      this.isChatOpen = true
      this.newMessagesCount = 0
    },
    closeChat() {
      this.isChatOpen = false
    }
  }
}
</script>
