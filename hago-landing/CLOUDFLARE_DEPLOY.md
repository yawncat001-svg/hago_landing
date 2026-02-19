# Cloudflare Pages 배포 및 업데이트 가이드

이 문서는 HAGO 랜딩 페이지를 Cloudflare Pages에 배포하고 업데이트하는 방법을 설명합니다.

## 1. 초기 배포 (GitHub 연결) - 추천

가장 쉽고 권장되는 방법은 GitHub 저장소와 Cloudflare Pages를 연결하는 것입니다.

1.  **GitHub에 코드 푸시**:
    *   현재 작업 중인 코드를 GitHub 저장소에 업로드합니다.
2.  **Cloudflare 대시보드 접속**:
    *   [Cloudflare Dashboard](https://dash.cloudflare.com/)에 로그인합니다.
    *   **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**을 선택합니다.
3.  **저장소 선택 및 설정**:
    *   HAGO 프로젝트 저장소를 선택합니다.
    *   **Build settings**:
        *   **Framework preset**: `Next.js`
        *   **Build command**: `npm run build`
        *   **Build output directory**: `.next` (또는 Cloudflare가 자동 감지하는 기본값)
4.  **환경 변수 설정**:
    *   **Environment variables** 섹션에서 `.env.local`에 포함된 모든 변수들을 추가합니다.
    *   특히 `SMTP` 관련 정보가 정확해야 문의 폼이 작동합니다.
5.  **Save and Deploy**:
    *   첫 배포가 시작됩니다.

## 2. 업데이트 방법

GitHub 연결 방식에서는 업데이트가 매우 간단합니다.

*   **자동 업데이트**: GitHub의 `main` 브랜치에 코드를 푸시(Push)하거나 PR을 머지(Merge)하면 Cloudflare가 이를 감지하여 **자동으로 다시 빌드하고 배포**합니다.
*   **수동 업데이트**: Cloudflare 대시보드의 프로젝트 페이지에서 **Deployments** 탭으로 이동하여 최근 배포를 다시 실행(Retry)할 수도 있습니다.

## 3. wrangler CLI를 사용한 수동 배포

GitHub을 사용하지 않거나 로컬에서 직접 배포하고 싶을 때 사용합니다.

1.  **wrangler 설치**:
    ```bash
    npm install -g wrangler
    ```
2.  **프로젝트 빌드**:
    ```bash
    npm run build
    ```
3.  **배포 명령 실행**:
    ```bash
    npx wrangler pages deploy .next
    ```
    *   첫 실행 시 Cloudflare 로그인이 필요할 수 있습니다.

> [!TIP]
> **브랜치 프리뷰**: GitHub 연결 시, `main` 브랜치 외의 다른 브랜치에 푸시하면 별도의 프리뷰 URL을 생성해 줍니다. 배포 전 미리 확인하기 좋습니다.
