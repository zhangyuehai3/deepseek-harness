/** Durable settings namespace for product-wide GUI onboarding facts. */
export const WELCOME_NOTICE_SETTINGS_NAMESPACE = 'ui-onboarding'

/** Field storing the last welcome notice version the user acknowledged. */
export const WELCOME_NOTICE_ACK_FIELD = 'welcomeNoticeVersion'

/**
 * Bump only when the notice changes materially and every user should see it
 * again. The acknowledgement is compared for exact equality.
 */
export const WELCOME_NOTICE_VERSION = '2026-08-20.1'

/** The complete editable forced-update notice in both supported GUI locales. */
export const WELCOME_NOTICE_COPY = {
  zh: {
    title: '强制更新页面',
    body: '请更新到最新版本的 EZAIGC Desktop 后再继续使用。',
    continueLabel: '继续',
  },
  en: {
    title: 'Forced Update',
    body: 'Please update to the latest version of EZAIGC Desktop before continuing.',
    continueLabel: 'Continue',
  },
} as const
