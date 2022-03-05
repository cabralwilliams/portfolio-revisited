import { gql } from "@apollo/client";

export const CREATE_USER = gql`
    mutation createUser($first_name: String!, $last_name: String!, $email: String!, $username: String!, $password: String!) {
        createUser(first_name: $first_name, last_name: $last_name, email: $email, username: $username, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
                email
                inbox {
                    message_text
                    sender_name
                    sender_email
                    created_at
                    has_been_read
                }
            }
        }
    }
`;

export const SEND_MESSAGE = gql`
    mutation sendMessage($sender_name: String!, $sender_email: String!, $message_text: String!) {
        sendMessage(sender_name: $sender_name, sender_email: $sender_email, message_text: $message_text) {
            message_text
            sender_name
            sender_email
            created_at
        }
    }
`;