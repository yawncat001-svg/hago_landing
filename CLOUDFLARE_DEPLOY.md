# Cloudflare Pages 배포 가이드 (OpenNext 정적 배포)

이 프로젝트는 Next.js App Router를 사용하며, OpenNext를 통해 Cloudflare Pages에 배포됩니다.

## 1. Cloudflare 대시보드 빌드 설정

Cloudflare Pages 대시보드에서 다음과 같이 설정하세요:

*   **프레임워크 미리 설정 (Framework preset)**: `None`
*   **빌드 명령 (Build command)**: `opennextjs-cloudflare build`
*   **빌드 출력 디렉터리 (Build output directory)**: `.open-next`
*   **루트 디렉터리 (Root directory)**: `/` (또는 비워둠)

## 2. 환경 변수 설정 (Settings > Environment variables)

필요한 경우 다음 변수들을 **Production**과 **Preview** 모두에 추가하세요:

| 변수명 | 값 |
| :--- | :--- |
| `NODE_VERSION` | `18` 이상 |

## 3. 호환성 설정 (Settings > Functions)

*   **Node.js compatibility**: `nodejs_compat` 플래그를 활성화하세요.

## 4. 배포 프로세스

*   `main` 브랜치에 코드가 푸시되면 Cloudflare가 자동으로 감지하여 빌드 및 배포를 진행합니다.
*   빌드가 실패하면 Cloudflare 대시보드의 배포 로그를 확인하세요.

## 5. 로컬 테스트

```bash
npm run pages:build
```

이 명령어로 로컬에서 Cloudflare 빌드를 테스트할 수 있습니다.
