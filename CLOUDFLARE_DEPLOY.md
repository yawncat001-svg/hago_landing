# Cloudflare Pages 배포 가이드 (최종 최적화)

이 프로젝트는 Next.js App Router와 Resend(API)를 사용하며, Cloudflare Pages에 최적화되어 있습니다.

## 1. Cloudflare 대시보드 빌드 설정 (가장 중요)

Vercel 관련 설정을 모두 제거했으므로, Cloudflare Pages 대시보드에서 아래와 같이 **정확하게** 입력해야 배포에 실패하지 않습니다.

*   **프레임워크 미리 설정 (Framework preset)**: `None` (또는 `Next.js`)
*   **빌드 명령 (Build command)**: `opennextjs-cloudflare build`
*   **빌드 출력 디렉터리 (Build output directory)**: `.open-next`
    *   *참고: `.open-next`는 OpenNext가 사용하는 출력 디렉터리입니다.*
*   **루트 디렉터리 (Root directory)**: `/` (또는 비워둠)
    *   *참고: 이제 프로젝트 파일들이 레포지토리 최상위(Root)에 위치하므로 설정을 반드시 `/`로 변경해야 합니다.*

## 2. 환경 변수 설정 (Settings > Environment variables)

이메일 발송 기능을 위해 다음 변수들을 **Production**과 **Preview** 모두에 추가하세요.

| 변수명 | 값 |
| :--- | :--- |
| `RESEND_API_KEY` | `re_8GFqEhMh_DGWmpeUCY1MbveF5VpDi2Pbg` |
| `CONTACT_EMAIL` | `yawncat.001@gmail.com` |
| `NODE_VERSION` | `18` 이상 |

## 3. 호환성 플래그 (Settings > Functions > Compatibility flags)

*   **Node.js compatibility**: `nodejs_compat` 플래그를 추가하거나 활성화하세요. (Edge Runtime에서 Resend SDK 사용 시 필요할 수 있습니다.)

## 4. R2 버킷 설정 (선택 사항, 캐싱용)

OpenNext는 R2를 사용하여 캐싱을 최적화할 수 있습니다. Cloudflare 대시보드에서 R2 버킷을 생성하세요 (생성하지 않으면 캐싱 없이 배포됩니다):

*   버킷 이름: `cache`
*   지역: 원하는 지역 선택

## 5. 업데이트 방법

*   `main` 브랜치에 코드가 푸시되면 Cloudflare가 자동으로 감지하여 빌드 및 배포를 진행합니다.
*   빌드 명령이나 출력 디렉터리가 위와 다를 경우 `Output directory not found` 에러가 발생하므로 반드시 확인해 주세요.
