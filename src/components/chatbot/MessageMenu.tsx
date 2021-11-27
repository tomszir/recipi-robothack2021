import axios from "axios";
import { KeyboardEvent, useState, ChangeEvent } from "react";
import { FiChevronDown, FiSend } from "react-icons/fi";
import { httpsCallable } from "@firebase/functions";

import { recipes } from "@/assets/recipes.json";
import { functions } from "@/firebase";

import * as S from "./MessageMenu.styled";

import Button from "@/components/ui/Button";

import MessageList from "./MessageList";
import { MessageProps, MessageRecipe } from "./Message";

/*

  const getResponse = (text: string) => {
    return httpsCallable(functions, "chatbot")(text);
  };

  const sendMessage = async () => {
    if (message === "") {
      return;
    }
    setMessage("");

    const _messages = [
      ...messages,
      { message, own: true },
      { message: "...", own: false },
    ];

    setMessages(_messages);

    const { data } = await getResponse(message);
    const response = (data as any).fulfillmentText;
    const intent = (data as any).intent.displayName;

    console.log(data);

    async function tellJokeIntent() {
      const { type, joke, setup, delivery } = await axios
        .get("https://v2.jokeapi.dev/joke/Any")
        .then(
          (res) =>
            res.data as {
              type: string;
              joke: string;
              setup: string;
              delivery: string;
            }
        );

      if (type === "single") {
        setMessages([
          ..._messages.slice(0, _messages.length - 1),
          {
            message: joke,
            own: false,
          },
        ]);
        return;
      }

      const __messages = [
        ..._messages.slice(0, _messages.length - 1),
        {
          message: setup,
          own: false,
        },
        {
          message: "...",
          own: false,
        },
      ];

      setMessages(__messages);

      setTimeout(() => {
        setMessages([
          ...__messages.slice(0, __messages.length - 1),
          {
            message: delivery,
            own: false,
          },
        ]);
      }, 1500);
    }

    function randomRecipeIntent() {
      const recipeCount = recipes.length;
      const recipeIndex = Math.floor(Math.random() * recipeCount);
      const recipe = recipes[recipeIndex];

      setMessages([
        ..._messages.slice(0, _messages.length - 1),
        {
          message: response,
          own: false,
        },
        {
          message: (
            <>
              <img
                style={{
                  width: "calc(100% + 24px)",
                  margin: -12,
                  marginBottom: 8,
                }}
                src={recipe.thumbnailUrl}
                alt="thumbnail"
              />
              <Link to={`/recipe/${recipeIndex}`}>{recipe.name}</Link>
            </>
          ),
          own: false,
        },
      ]);
    }

    console.log(intent);

    switch (intent) {
      case "RANDOM_RECIPE":
        randomRecipeIntent();
        break;
      case "TELL_JOKE":
        tellJokeIntent();
        break;
      default:
        setMessages([
          ..._messages.slice(0, _messages.length - 1),
          {
            message: response,
            own: false,
          },
        ]);
        break;
    }
  };
*/

export default function MessageMenu({
  onClose,
  open,
}: {
  open: boolean;
  onClose: () => any;
}) {
  const [content, setContent] = useState<string>("");
  const [messages, setMessages] = useState<MessageProps[]>([
    {
      content: "Hi! I am PiBot! Ask me anything!",
      bot: true,
    },
    {
      content: "Try saying:",
      bot: true,
    },
    {
      content: '"Do you have any recipe recommendations?"',
      bot: true,
    },
  ]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = async () => {
    // Don't post empty message.
    if (content === "") {
      return;
    }

    setContent("");

    const userMessage = {
      content,
    };

    const botWaitingMessage = {
      content: "...",
      bot: true,
    };

    setMessages((messages) => [...messages, userMessage, botWaitingMessage]);

    // Dialogflow response data
    const { data } = await httpsCallable(functions, "chatbot")(content);
    const intent = (data as any).intent.displayName;
    const response = (data as any).fulfillmentText;
    const botResponseMessage = {
      content: response,
      bot: true,
    };

    if (intent === "TELL_JOKE") {
      const { type, joke, setup, delivery } = await axios
        .get("https://v2.jokeapi.dev/joke/Any")
        .then(
          (res) =>
            res.data as {
              type: string;
              joke: string;
              setup: string;
              delivery: string;
            }
        );

      if (type === "single") {
        const botMessage = {
          content: joke,
          bot: true,
        };

        setMessages((messages) => [
          ...messages.slice(0, messages.length - 1),
          botMessage,
        ]);
        return;
      }

      const botMessage = {
        content: setup,
        bot: true,
      };

      setMessages((messages) => [
        ...messages.slice(0, messages.length - 1),
        botMessage,
        botWaitingMessage,
      ]);

      // Delay the punchline to after 1-2s
      setTimeout(() => {
        const botMessage = {
          content: delivery,
          bot: true,
        };

        setMessages((messages) => [
          ...messages.slice(0, messages.length - 1),
          botMessage,
        ]);
      }, Math.floor(Math.random() * 1000 + 1000));
      return;
    }

    if (intent === "RANDOM_RECIPE") {
      const recipeCount = recipes.length;
      const recipeIndex = Math.floor(Math.random() * recipeCount);
      const recipe = recipes[recipeIndex];

      const botRecipeMessage = {
        content: <MessageRecipe recipe={recipe} />,
        bot: true,
      };

      setMessages((messages) => [
        ...messages.slice(0, messages.length - 1),
        botResponseMessage,
        botRecipeMessage,
      ]);
      return;
    }

    setMessages((messages) => [
      ...messages.slice(0, messages.length - 1),
      botResponseMessage,
    ]);
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <S.MessageMenu show={open}>
      <S.MessageMenuHeader onClick={onClose}>
        <span>Your chat with PiBot</span>
        <FiChevronDown size={18} />
      </S.MessageMenuHeader>
      <MessageList messages={messages} />
      <S.MessageFooter>
        <S.MessageInput
          placeholder="Say something..."
          value={content}
          onChange={onChange}
          onSubmit={onSubmit}
          onKeyPress={onKeyPress}
        />
        <Button onClick={onSubmit} label={<FiSend size={18} />} />
      </S.MessageFooter>
    </S.MessageMenu>
  );
}
