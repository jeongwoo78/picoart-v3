# 🎨 PicoArt v3 - 최종 버전

AI 기반 아트 스타일 변환 웹 앱

---

## ✨ 주요 기능

- 📸 **자동 이미지 리사이즈** (800px, 80% 압축)
- 🎨 **6가지 스타일** (Van Gogh, Picasso, Monet, Munch, Klimt, 수채화)
- 🚀 **Vercel 서버리스** (무료 호스팅)
- 🔒 **토큰 보안** (브라우저에만 저장)

---

## 📦 파일 구조

```
picoart-v3/
├── index.html        # 프론트엔드 (자동 리사이즈 포함)
├── api/
│   ├── convert.js    # 스타일 변환 시작 API
│   └── status.js     # 변환 상태 확인 API
└── README.md         # 이 파일
```

**총 3개 파일!** (package.json, vercel.json 불필요)

---

## 🚀 Vercel 배포 방법 (5분)

### 1. GitHub 업로드

**방법 A: GitHub Desktop (쉬움)**
1. GitHub Desktop 열기
2. File → New Repository
3. Name: `picoart-v3`
4. Local Path: 이 폴더 선택
5. Create Repository
6. Publish repository (☐ Private 체크 해제!)

**방법 B: 웹에서 직접**
1. https://github.com → New repository
2. picoart-v3 생성
3. 파일 업로드

### 2. Vercel 연결

1. https://vercel.com 로그인
2. **Add New** → **Project**
3. **picoart-v3** Import
4. **Deploy** 클릭 (설정 변경 불필요!)

### 3. 완료! 🎉

```
✅ https://picoart-v3.vercel.app
```

---

## 💡 사용 방법

1. **Replicate API 토큰** 발급
   - https://replicate.com/account/api-tokens
   - 무료 계정 생성 → API 토큰 복사

2. **웹사이트 접속**
   - 배포된 URL로 이동

3. **변환 시작**
   - 1️⃣ API 토큰 입력
   - 2️⃣ 사진 업로드 (자동 리사이즈!)
   - 3️⃣ 스타일 선택
   - 🎨 변환 시작!

---

## 💰 비용

- **Vercel:** 무료
  - 월 100GB 대역폭
  - 무제한 배포
  
- **Replicate:** 사용량 기반
  - $5 무료 크레딧
  - 변환당 약 $0.006

---

## 🔧 기술 스택

- **프론트엔드:** HTML5, CSS3, Vanilla JS
- **백엔드:** Vercel Serverless Functions (Node.js)
- **AI API:** Replicate (Neural Style Transfer)

---

## 📝 주요 개선사항 (v1 → v3)

- ✅ 자동 이미지 리사이즈 (413 에러 해결)
- ✅ CommonJS 형식 (module.exports)
- ✅ 설정 파일 제거 (Vercel 자동 감지)
- ✅ CORS 헤더 추가
- ✅ 에러 처리 강화

---

## 🐛 문제 해결

### "413 Payload Too Large" 에러
→ 이미지가 자동으로 800px로 리사이즈됨 (해결됨!)

### API 404 에러
→ 30초 대기 후 재시도 (Vercel 재배포 중)

### 변환 실패
→ Replicate API 토큰 확인

---

## 📞 지원

문제 발생 시:
1. Vercel 대시보드 → Build Logs 확인
2. 브라우저 Console 확인 (F12)
3. API 토큰 유효성 확인

---

**🎉 즐거운 아트 변환 되세요!**
