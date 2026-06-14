// =========================================================
//  池田美装 サイト 最小限のJS
//  1) ハンバーガーメニューの開閉
//  2) スクロール時のフェードイン（IntersectionObserver）
// =========================================================

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1) ハンバーガーメニュー ---------- */
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      hamburger.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
    });

    // ナビ内リンクをタップしたらメニューを閉じる
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'メニューを開く');
      });
    });
  }

  /* ---------- 2) スクロールフェードイン ---------- */
  const targets = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(function (el) { observer.observe(el); });
  } else {
    // 非対応ブラウザはそのまま表示
    targets.forEach(function (el) { el.classList.add('is-visible'); });
  }
});
