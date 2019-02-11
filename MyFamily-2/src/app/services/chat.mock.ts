import { Chat } from "./chat.service";

const startDate:Date = new Date();

function mockDate(hours):number {
	return new Date(startDate.getTime() - (hours * 1000*60*60)).getTime();
}

export const chatMock: Chat = [
    {
        time: mockDate(10),
        text: 'Hello Ima, how are you?',
        senderId: 'id-3'
    },

    {
        time: mockDate(9.5),
        text: "I'm fine. Where are you?",
        senderId: 'id-2'
    },

    {
        time: mockDate(9),
        text: 'Look on the Map :)',
        senderId: 'id-3'
    },

    {
        time: mockDate(5),
        text: "Girl, don't forget to make homework!",
        senderId: 'id-1'
    },

    {
        time: mockDate(4.5),
        text: 'Ok, dad.',
        senderId: 'id-4'
    },
]