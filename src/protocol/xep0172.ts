// ====================================================================
// XEP-0172: User Nickname
// --------------------------------------------------------------------
// Source: https://xmpp.org/extensions/xep-0172.html
// Version: 1.1 (2012-03-21)
// ====================================================================

import {
    childText,
    DefinitionOptions,
    extendMessage,
    extendPresence,
    pubsubItemContentAliases,
    text
} from '../jxt';
import { NS_NICK } from '../Namespaces';

import { PubsubItemContent } from './';

declare module './' {
    export interface Message {
        nick?: string;
    }

    export interface Presence {
        nick?: string;
    }
}

export interface UserNick extends PubsubItemContent {
    itemType?: typeof NS_NICK;
    nick?: string;
}

const Protocol: DefinitionOptions[] = [
    extendMessage({
        nick: childText(NS_NICK, 'nick')
    }),
    extendPresence({
        nick: childText(NS_NICK, 'nick')
    }),
    {
        aliases: pubsubItemContentAliases(),
        element: 'nick',
        fields: {
            nick: text()
        },
        namespace: NS_NICK,
        type: NS_NICK
    }
];
export default Protocol;
