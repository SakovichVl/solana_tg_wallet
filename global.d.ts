import { WebApp } from './src/core/twa-types';

declare global {
    interface Window {
        Telegram: {
            WebApp: WebApp;
        };
        TelegramWebviewProxy?: any;
    }
}

window.Telegram.WebApp = window.Telegram.WebApp || {}
window.TelegramWebviewProxy = window.TelegramWebviewProxy || {}

