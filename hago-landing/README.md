# HAGO (Yawncat) Landing Page - Setup Guide

이 프로젝트는 현재 Node.js 환경이 감지되지 않아 코드를 수동으로 생성했습니다.
웹사이트를 실행하려면 다음 단계에 따라 Node.js를 설치하고 프로젝트를 실행해주세요.

## 1. 사전 준비 (Prerequisites)

### Node.js 설치
- [Node.js 공식 홈페이지](https://nodejs.org/)에서 LTS 버전을 다운로드하여 설치해주세요.
- 설치 후 터미널(CMD 또는 PowerShell)에서 다음 명령어로 설치를 확인합니다:
  ```bash
  node -v
  npm -v
  ```

## 주의: Cloudflare Pages 배포 설정
- **Build command**: `npx @cloudflare/next-on-pages@1`
- **Build output directory**: `.vercel/output/static` (필수!)
- **Root directory**: `hago-landing`
## 2. 프로젝트 실행 (Run Project)

프로젝트 폴더(`c:\_ag_yawncat\hago-landing`)로 이동하여 다음 명령어를 순서대로 입력하세요.

1. **의존성 설치** (최초 1회)
   ```bash
   npm install
   ```
2. **개발 서버 실행**
   ```bash
   npm run dev
   ```
3. **브라우저 확인**
   - 실행 후 브라우저 주소창에 `http://localhost:3000`을 입력하여 접속합니다.

## 3. 프로젝트 구조 (Structure)

- `app/`: 메인 페이지 및 레이아웃, 글로벌 스타일
- `components/`: UI 컴포넌트 (Hero, Solutions, Contact 등)
- `tailwind.config.ts`: 디자인 시스템 설정 (네온 그린 컬러 등)

## 4. 문제 해결 (Troubleshooting)

### Q1. 'Node', 'npm' 명령어를 찾을 수 없다는 에러가 발생해요.
- Node.js가 설치되어 있지만 시스템 환경 변수(PATH)에 등록되지 않았을 수 있습니다.
- **해결 방법 1 (임시)**: 터미널에서 다음 명령어를 입력하여 실행 경로를 임시로 추가합니다.
  ```powershell
  $env:Path = "C:\Program Files\nodejs;" + $env:Path
  ```
- **해결 방법 2 (영구)**: 윈도우 검색창에 "시스템 환경 변수 편집" 검색 -> '환경 변수' 버튼 클릭 -> '시스템 변수'의 'Path' 편집 -> `C:\Program Files\nodejs\` 추가.

### Q2. Build failed because of webpack errors
- `postcss` 관련 설정 문제일 수 있습니다. `autoprefixer` 패키지가 설치되어 있는지 확인하세요.
- 해결: `npm install -D autoprefixer` 실행 (현재 `package.json`에는 포함되어 있습니다).

