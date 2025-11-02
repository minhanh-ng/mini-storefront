'use client'

export default function StatusMessage({loading, error, empty}) {
    if (loading) {
        return <p>Page is loading</p>
    }

    if (error) {
        return <p>Error loading products</p>
    }

    if (empty) {
        return <p>There is no product available</p>
    }

    return null;
}