"use client";

import React, { useState } from "react";

export default function VitalityDashboard() {
  const [selectedMetric, setSelectedMetric] = useState<number>(0);

  const metrics = [
    {
      title: "Mobility & Joint Range",
      value: "92",
      unit: "/ 100",
      status: "Optimal Alignment",
      barWidth: "92%",
      barColor: "bg-deep-olive",
      icon: "accessibility_new",
      detail:
        "Full thoracic spine rotation restored; impingement-free overhead reach without lumbar arch compensation.",
      observation: "Shoulder and thoracic spine fully unlocked across all tests.",
    },
    {
      title: "Autonomic Recovery",
      value: "58",
      unit: "BPM Rest",
      status: "Parasympathetic Tone",
      icon: "ecg_heart",
      isChart: true,
      detail:
        "Resting heart rate decreased by 8 BPM over 6 weeks. Heart Rate Variability (HRV) consistently elevated after session downs.",
      observation: "Deep parasympathetic rebound recorded during overnight sleep.",
    },
    {
      title: "Mood & Energy Resilience",
      value: "High",
      unit: "Sustained",
      status: "Zero Fatigue Slumps",
      icon: "wb_sunny",
      isEnergyBars: true,
      detail:
        "Consistent mid-afternoon cognitive stamina without relying on excessive caffeine. Energy rebounds effortlessly.",
      observation: "Zero 3PM energy slump recorded across weekly logs.",
    },
    {
      title: "Everyday Load Capacity",
      value: "+45%",
      unit: "Functional Gain",
      status: "Real-Life Strength",
      barWidth: "78%",
      barColor: "bg-burnt-orange",
      icon: "transfer_within_a_station",
      detail:
        "Loaded carries, stair climbs, and bending to lift heavy luggage feel stable and natural.",
      observation: "Stairs, carrying, and bending feel effortless without low-back tension.",
    },
  ];

  return (
    <div className="bg-sand p-space-lg sm:p-space-xl rounded-2xl border border-sand-border shadow-md flex flex-col gap-space-lg">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-sm border-b border-sand-border gap-2">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-deep-olive font-bold">
            MEMBER DASHBOARD SPECIMEN
          </span>
          <span className="font-headline-md text-headline-md uppercase text-deep-olive">
            Vitality Index v2.4
          </span>
        </div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-ivory border border-sand-border rounded-full self-start sm:self-auto shadow-sm">
          <span className="w-2 h-2 rounded-full bg-burnt-orange animate-pulse"></span>
          <span className="font-label-sm text-label-sm uppercase text-deep-olive font-bold">
            Active Diagnostic Record
          </span>
        </div>
      </div>

      {/* 2x2 Grid of Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
        {metrics.map((metric, idx) => {
          const isSelected = selectedMetric === idx;
          return (
            <div
              key={metric.title}
              onClick={() => setSelectedMetric(idx)}
              className={`p-space-md rounded-xl transition-all cursor-pointer flex flex-col justify-between gap-space-xs ${
                isSelected
                  ? "bg-ivory border-2 border-burnt-orange shadow-md ring-2 ring-burnt-orange/10"
                  : "bg-ivory/80 border border-sand-border hover:bg-ivory hover:border-burnt-orange/40 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-muted-olive uppercase tracking-wider font-semibold">
                  {metric.title}
                </span>
                <span className="material-symbols-outlined text-deep-olive text-[20px]">
                  {metric.icon}
                </span>
              </div>

              <div className="flex items-baseline gap-space-xs mt-space-xs">
                <span className="font-display-lg text-display-lg text-deep-olive leading-none">
                  {metric.value}
                </span>
                <span className="font-label-sm text-label-sm text-muted-olive font-bold">
                  {metric.unit}
                </span>
              </div>

              {/* Progress bar or Chart or Bars */}
              {metric.barWidth && (
                <div className="w-full bg-sand h-2 rounded-full overflow-hidden mt-space-xs">
                  <div
                    className={`${metric.barColor} h-full rounded-full transition-all duration-700`}
                    style={{ width: metric.barWidth }}
                  ></div>
                </div>
              )}

              {metric.isChart && (
                <div className="w-full h-6 mt-space-xs">
                  <svg
                    className="w-full h-full text-burnt-orange"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 25"
                  >
                    <path
                      d="M0,15 Q15,5 30,16 T60,8 T90,14 L100,12"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                    ></path>
                  </svg>
                </div>
              )}

              {metric.isEnergyBars && (
                <div className="flex gap-1.5 mt-space-xs">
                  <div className="h-2 flex-1 rounded-full bg-deep-olive"></div>
                  <div className="h-2 flex-1 rounded-full bg-deep-olive"></div>
                  <div className="h-2 flex-1 rounded-full bg-deep-olive"></div>
                  <div className="h-2 flex-1 rounded-full bg-deep-olive"></div>
                  <div className="h-2 flex-1 rounded-full bg-sage-dark"></div>
                </div>
              )}

              <span className="font-body-sm text-body-sm text-light-olive mt-space-xs">
                {metric.observation}
              </span>
            </div>
          );
        })}
      </div>

      {/* Selected Metric Deep Dive */}
      <div className="p-space-md rounded-xl bg-ivory border border-sand-border shadow-sm">
        <div className="flex items-center gap-2 mb-1 text-deep-olive">
          <span className="material-symbols-outlined text-burnt-orange text-lg">insights</span>
          <span className="font-label-md text-label-md uppercase tracking-wider font-bold">
            Physiological Insight: {metrics[selectedMetric].title}
          </span>
        </div>
        <p className="font-body-md text-body-md text-muted-olive leading-relaxed">
          {metrics[selectedMetric].detail}
        </p>
      </div>

      {/* Reassurance Footer */}
      <div className="p-space-sm rounded-lg bg-sand-border/40 flex items-center gap-space-sm">
        <span className="material-symbols-outlined text-deep-olive text-[20px] shrink-0">
          info
        </span>
        <p className="font-body-sm text-body-sm text-deep-olive">
          Assessments are conducted every 6 weeks through quiet, respectful functional check-ins with your GYM coach—never public weigh-ins or fat calipers.
        </p>
      </div>
    </div>
  );
}
