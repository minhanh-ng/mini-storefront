'use client';
// Controlled inputs that update parent state
export default function CategoryFilter({value, onChange}) {
    return (
        <label>
            Category:
            <input type="text" value={value} onChange={e => onChange(e.target.value)} />
        </label>
    );
}
