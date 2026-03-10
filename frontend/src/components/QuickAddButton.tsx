/**
 * Quick add button component
 */

import React from "react";
import { COLORS } from "../constants/colors";

interface QuickAddButtonProps {
  onAddExpense: () => void;
  onAddCategory: () => void;
}

export function QuickAddButton({ onAddExpense, onAddCategory }: QuickAddButtonProps) {
  const containerStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    alignItems: "center",
    zIndex: 100,
  };

  const buttonStyle: React.CSSProperties = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    color: "white",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    position: "absolute",
    right: "70px",
    backgroundColor: "rgba(0,0,0,0.6)",
    color: "white",
    padding: "0.2rem 0.5rem",
    borderRadius: "0.25rem",
    fontSize: "0.75rem",
    whiteSpace: "nowrap",
    pointerEvents: "none",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div style={containerStyle}>
      {/* Add Category button */}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <span style={labelStyle}>Add Category</span>
        <button
          style={{ ...buttonStyle, backgroundColor: COLORS.accent.a02 ?? COLORS.accent.a01 }}
          onClick={onAddCategory}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label="Add category"
        >
          🏷️
        </button>
      </div>

      {/* Add Expense button */}
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <span style={labelStyle}>Add Expense</span>
        <button
          style={{ ...buttonStyle, backgroundColor: COLORS.accent.a01 }}
          onClick={onAddExpense}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label="Add expense"
        >
          +
        </button>
      </div>
    </div>
  );
}