'use client';
export default function CategoryFilter({value, onChange}) {
    return (
        <label>
            Category:
            <input type="text" value={value} onChange={e => onChange(e.target.value)} />
        </label>
    );
}
