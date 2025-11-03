'use client';
// Controlled inputs that update parent state
export default function PriceFilter({value, onChange}) {
    return (
        <label>
            Max Price:
            <input type="number" value={value} onChange={e => onChange(e.target.value)} />
        </label>
    );
}
