export const USER_FRAGMENT = `
     id
     Name
     avatar
 `;

   export const MESSAGE_FRAGMENT = `
        id
        text
        to {
            ${USER_FRAGMENT}
        }
        from {
            ${USER_FRAGMENT}
        }
    `;


export const ROOM_FRAGMENT = `
        fragment RoomParts on Room {
            id
            participants {
              ${USER_FRAGMENT}
            }
            messages {
           ${MESSAGE_FRAGMENT}
            }
        }
    `;
