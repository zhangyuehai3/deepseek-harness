/** Durable settings namespace for product-wide GUI onboarding facts. */
export const WELCOME_NOTICE_SETTINGS_NAMESPACE = 'ui-onboarding'

/** Field storing the last welcome notice version the user acknowledged. */
export const WELCOME_NOTICE_ACK_FIELD = 'welcomeNoticeVersion'

/**
 * Bump only when the notice changes materially and every user should see it
 * again. The acknowledgement is compared for exact equality.
 */
export const WELCOME_NOTICE_VERSION = '2026-08-20.2'

/** The complete editable EZAIGC Desktop welcome notice in both supported GUI locales. */
export const WELCOME_NOTICE_COPY = {
  zh: {
    title: '欢迎使用 EZAIGC 桌面端',
    body: '基于 EZAIGC Harness 架构深度定制打造，无缝集成 DeepSeek、Kimi 等顶尖大模型协同矩阵。原生支持深度思考推理链、智能联网检索与全局快捷唤醒，所有对话数据本地加密存储，为您带来更纯粹、极速与安全的桌面级 AI 协同生产力体验。',
    continueLabel: '开始体验',
  },
  en: {
    title: 'Welcome to EZAIGC Desktop',
    body: 'Built on the EZAIGC Harness architecture and deeply customized, seamlessly integrating a collaborative matrix of top-tier large models including DeepSeek, Kimi, and more. Natively supports deep-thinking reasoning chains, intelligent web retrieval, and global quick wake-up. All conversation data is encrypted and stored locally, delivering a purer, faster, and more secure desktop-level AI collaborative productivity experience.',
    continueLabel: 'Get Started',
  },
} as const
