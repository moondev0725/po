import { useMemo, useState } from 'react';

const GRADES = ['R', 'SR', 'SSR'];

const BASE_STATS = {
  R: { vocal: 12, dance: 10, charm: 8, fan: 52 },
  SR: { vocal: 22, dance: 18, charm: 15, fan: 118 },
  SSR: { vocal: 38, dance: 32, charm: 26, fan: 228 },
};

const LEVELS = [0, 1, 2, 3, 4, 5];

function computeStats(grade, level) {
  const b = BASE_STATS[grade];
  const abilityMul = 1 + level * 0.12;
  const fanMul = 1 + level * 0.08;
  return {
    vocal: Math.round(b.vocal * abilityMul),
    dance: Math.round(b.dance * abilityMul),
    charm: Math.round(b.charm * abilityMul),
    fan: Math.round(b.fan * fanMul),
  };
}

export function NextDebutEnhancement() {
  const [grade, setGrade] = useState('SR');
  const [plus, setPlus] = useState(0);

  const preview = useMemo(() => computeStats(grade, plus), [grade, plus]);
  const base = BASE_STATS[grade];

  return (
    <div className="next-debut-enhance info-block">
      <h4>포토카드 강화 (미리보기)</h4>
      <p className="next-debut-enhance-lead">
        등급과 강화 단계를 바꾸면 예상 능력치 보너스가 달라집니다. (포트폴리오용 단순 계산 예시)
      </p>

      <div className="next-debut-enhance-row">
        <span className="next-debut-enhance-label">카드 등급</span>
        <div className="next-debut-enhance-segment" role="group" aria-label="카드 등급 선택">
          {GRADES.map((g) => (
            <button
              key={g}
              type="button"
              className={grade === g ? 'is-active' : ''}
              onClick={() => setGrade(g)}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="next-debut-enhance-row">
        <span className="next-debut-enhance-label">강화 단계</span>
        <div className="next-debut-enhance-steps" role="group" aria-label="강화 단계 선택">
          {LEVELS.map((lv) => (
            <button
              key={lv}
              type="button"
              className={plus === lv ? 'is-active' : ''}
              onClick={() => setPlus(lv)}
            >
              +{lv}
            </button>
          ))}
        </div>
      </div>

      <div className="next-debut-enhance-stats">
        <p className="next-debut-enhance-stats-title">예상 증가값</p>
        <ul>
          <li>
            보컬 <strong>+{preview.vocal}</strong>
            <span className="next-debut-enhance-delta">
              (기본 {base.vocal} → 강화 반영 {preview.vocal})
            </span>
          </li>
          <li>
            댄스 <strong>+{preview.dance}</strong>
            <span className="next-debut-enhance-delta">
              (기본 {base.dance} → {preview.dance})
            </span>
          </li>
          <li>
            매력 <strong>+{preview.charm}</strong>
            <span className="next-debut-enhance-delta">
              (기본 {base.charm} → {preview.charm})
            </span>
          </li>
          <li>
            팬 수 <strong>+{preview.fan}</strong>
            <span className="next-debut-enhance-delta">
              (기본 {base.fan} → {preview.fan})
            </span>
          </li>
        </ul>
        <p className="next-debut-enhance-note">
          능력치 계수: 단계당 +12% · 팬 수 계수: 단계당 +8% (예시)
        </p>
      </div>
    </div>
  );
}
