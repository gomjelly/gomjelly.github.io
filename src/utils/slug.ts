// 프론트매터의 subcategory 라벨(예: "C++", "Node.js")을 URL-safe한 슬러그로 변환.
// 특수문자가 섞인 기술 용어만 명시적으로 치환하고, 나머지(한글 포함)는 공백만 하이픈으로 바꿈.
export function slugifySubcategory(label: string): string {
  return label
    .trim()
    .toLowerCase()
    .replace(/c\+\+/g, 'cpp')
    .replace(/node\.js/g, 'nodejs')
    .replace(/\s+/g, '-');
}
