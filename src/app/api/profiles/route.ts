import { NextResponse } from 'next/server';

const profiles = [
  {
    name: 'Abhishek Gupta',
    position: '마케팅',
    experience: '2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    image: '/profile-image.png',
    flag: '/country.png',
  },
  {
    name: 'Jane Doe',
    position: '개발자',
    experience: '3y+',
    skills: ['웹 개발', '프론트엔드', 'UI 디자인', 'API 통합', '백엔드'],
    image: '/profile-image.png',
    flag: '/country.png',
  },
  {
    name: 'John Smith',
    position: '디자이너',
    experience: '5y+',
    skills: ['UX 디자인', '그래픽 디자인', '프로토타이핑', '브랜딩', 'UI 디자인'],
    image: '/profile-image.png',
    flag: '/country.png',
  },
];

export async function GET() {
  return NextResponse.json(profiles);
}
