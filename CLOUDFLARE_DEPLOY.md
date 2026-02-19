# Cloudflare Pages 배포 가이드 (정적 배포)

이 프로젝트는 Next.js를 사용한 순수 정적 사이트입니다. 동적 기능이 없으므로 단순한 정적 호스팅으로 배포됩니다.

## 필수 사항

- Cloudflare 계정
- GitHub 계정 (리포지토리 연결용)

## 1. Cloudflare Pages 프로젝트 생성

### 새 Cloudflare Pages 프로젝트 생성 절차:

1. **Cloudflare 대시보드 접속**: https://dash.cloudflare.com
2. **Pages 선택**: 좌측 메뉴에서 "Pages" 클릭
3. **GitHub에 연결**: "GitHub에 연결" 버튼 클릭
4. **리포지토리 선택**: `yawncat001-svg/hago_landing` 선택
5. **빌드 설정**:
   - **프로젝트 이름**: `hago-landing`
   - **프레임워크**: `None`
   - **빌드 명령**: `npm run build`
   - **빌드 출력 디렉터리**: `out`
   - **루트 디렉터리**: `/` (비워두기)

6. **환경 변수**: (선택 사항, 현재는 불필요)
7. **배포**: "저장 및 배포" 클릭

## 2. 배포 후 확인

- Cloudflare Pages 대시보드에서 배포 상태 확인
- 배포 완료 후 `https://hago-landing.pages.dev` 접속
- "yawncat" 텍스트 표시 확인

## 3. 로컬 테스트

```bash
# 의존성 설치
npm install

# 로컬 개발 서버 실행
npm run dev

# 정적 빌드 생성 (배포와 동일)
npm run build
```

빌드 후 로컬에서 정적 파일 테스트:
```bash
npx serve out
```

## 4. 배포 프로세스

`main` 브랜치에 푸시하면 Cloudflare가 자동으로:
1. 리포지토리 감지
2. `npm run build` 실행
3. `out` 디렉터리의 정적 파일 배포
4. `https://hago-landing.pages.dev` 업데이트

## 5. 문제 해결

### 404 에러 발생 시:
- Cloudflare 대시보드의 배포 로그 확인
- 빌드 출력 디렉터리가 `out`인지 확인
- 빌드 명령이 `npm run build`인지 확인

### 배포 실패 시:
- GitHub Actions 로그 확인: https://github.com/yawncat001-svg/hago_landing/actions
- 로컬에서 `npm run build` 성공 여부 확인
