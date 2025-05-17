document.getElementById("drawBtn").addEventListener("click", () => {
  const total = 25;
  const count = 4;
  const numbers = Array.from({ length: total }, (_, i) => i + 1);

  // Fisher-Yates Shuffle
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  const selected = numbers.slice(0, count).sort((a, b) => a - b);

  // SweetAlert2 팝업으로 결과 출력
  Swal.fire({
    title: "🎉 당번 뽑기 완료!",
    html: `<strong>당번 번호:</strong><br/><span style="font-size: 1.5rem; color: #4caf50;">${selected.join(", ")}</span>`,
    icon: "success",
    confirmButtonText: "확인",
    heightAuto: false
  });

  // HTML 안에도 출력 (보조용)
  document.getElementById("result").textContent = `당번 번호: ${selected.join(", ")}`;
});
