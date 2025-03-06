"use client";
import React from "react";
import { useState } from "react";
import Edit from "./edti";

interface Child {
  name: string;
  parent: string | null; // `null` for root elements
  children: Child[]; // Array of nested children
}

function buildHierarchy(items: Child[]): Child[] {
  const map: { [key: string]: Child } = {};
  const roots: Child[] = [];

  // Step 1: Create a map of all items
  items.forEach((item: Child) => {
    map[item.name] = { ...item, children: [] }; // Initialize each item with an empty children array
  });

  // Step 2: Build the hierarchy
  items.forEach((item: Child) => {
    if (item.parent) {
      // If the item has a parent, add it to the parent's children array
      map[item.parent].children.push(map[item.name]);
    } else {
      // If the item has no parent, it's a root item
      roots.push(map[item.name]);
    }
  });

  return roots; // Return the top-level items (hierarchy starts here)
}

const Dropdown = ({ item }: { item: Child }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div onClick={toggleDropdown} style={{ cursor: "pointer" }} >
        {item.name} {item.children.length > 0 && (isOpen ? "▼" : "▶")}
      </div>
      {isOpen && item.children.length > 0 && (
        <div style={{ marginLeft: "20px" }}>
          {item.children.map((child, index) => (
            <Dropdown key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const Hr = () => {
  const [items, setItems] = useState<Child[]>([
    { name: "ceo", parent: null, children: [] },
    { name: "coo", parent: "ceo", children: [] },
    { name: "cto", parent: "ceo", children: [] },
    { name: "cfo", parent: "ceo", children: [] },
    { name: "hr", parent: "ceo", children: [] },
    { name: "chef", parent: "cfo", children: [] },
    { name: "internal", parent: "cfo", children: [] },
    { name: "iinternal", parent: "hr", children: [] },
    { name: "internaliii", parent: "internal", children: [] },
  ]);

  const hierarchy: Child[] = buildHierarchy(items);

  return (
    <div>
      <div className="border border-4 justify-center place-self-center" >
        {hierarchy.map((item, index) => (
          <Dropdown key={index} item={item} />
        ))}
      </div>
      <Edit/>
    </div>
  );
};

export default Hr;