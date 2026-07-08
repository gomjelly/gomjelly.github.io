# 곰젤리's Blog

취미와 스터디 기록을 인터랙티브하게 정리하는 개인 블로그. [Astro](https://astro.build) + Tailwind CSS 기반, GitHub Pages로 배포.

## 프로젝트 구조

```text
/
├── src/
│   ├── components/       # Header, Footer, PostCard 등
│   │   └── widgets/       # 글에 삽입하는 인터랙티브 컴포넌트 (Quiz, Tabs, Stepper)
│   ├── content/
│   │   ├── hobby/          # 취미 글 (.mdx)
│   │   └── study/          # 스터디 글 (.mdx)
│   ├── content.config.ts  # 콘텐츠 컬렉션 스키마
│   ├── layouts/           # BaseLayout, PostLayout
│   └── pages/              # 라우트 (index, /hobby, /study, /about)
└── .github/workflows/deploy.yml  # GitHub Pages 자동 배포
```

## 새 글 쓰기

`src/content/hobby/` 또는 `src/content/study/`에 `.mdx` 파일을 추가하면 됩니다.

```mdx
---
title: "글 제목"
description: "한 줄 설명"
date: 2026-07-08
tags: ["태그1", "태그2"]
---

본문 내용...

<Quiz question="..." options={["A", "B"]} answerIndex={0} explanation="..." />
```

인터랙티브 위젯(`src/components/widgets/`):
- `Quiz` — 객관식 퀴즈, 정답/오답 즉시 피드백
- `Tabs` — 자식에 `data-tab="라벨"` 지정해 탭 전환
- `Stepper` — 자식에 `data-step="제목"` 지정해 단계별 진행

## 명령어

| 명령어 | 설명 |
| :--- | :--- |
| `npm install` | 의존성 설치 |
| `npm run dev` | 로컬 개발 서버 (`localhost:4321`) |
| `npm run build` | 프로덕션 빌드 (`./dist/`) |
| `npm run preview` | 빌드 결과 미리보기 |

## 배포

`main` 브랜치에 푸시하면 GitHub Actions가 자동으로 빌드 후 GitHub Pages에 배포합니다.
저장소 Settings → Pages → Source를 **GitHub Actions**로 설정해야 합니다.
