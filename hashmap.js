function hashMap(initialCapacity = 16, maxLoadFactor = 0.75) {

    let buckets = Array(initialCapacity).fill(null).map(() => []);
    let capacity = initialCapacity;
    let size = 0;
    const loadFactor = maxLoadFactor;

    function hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
        }
        return hashCode;
    }

    function set(key, value) {
        const index = hash(key);
        const bucket = buckets[index];

        for (let entry of bucket) {
            if (entry[0] === key) {
                entry[1] = value;
                return;
            }
        }

        bucket.push([key, value]);
        size++;

        if (size / capacity > loadFactor) {
            resize();
        }
    }

    function resize() {
        const oldBuckets = buckets;
        capacity *= 2;
        size = 0;
        buckets = Array(capacity).fill(null).map(() => []);

        for (let bucket of oldBuckets) {
            for (let [key, value] of bucket) {
                set(key, value);
            }
        }
    }

    function get(key) {
        const index = hash(key);
        const bucket = buckets[index];
        for (let [k, v] of bucket) {
            if (k === key) return v;
        }
        return null;
    }

    function has(key) {
        return get(key) !== null;
    }

    function remove(key) {
        const index = hash(key);
        const bucket = buckets[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                size--;
                return true;
            }
        }
        return false;
    }

    function length() {
        return size;
    }

    function clear() {
        buckets = Array(capacity).fill(null).map(() => []);
        size = 0;
    }

    function keys() {
        const result = [];
        for (let bucket of buckets) {
            for (let [k] of bucket) result.push(k);
        }
        return result;
    }

    function values() {
        const result = [];
        for (let bucket of buckets) {
            for (let [, v] of bucket) result.push(v);
        }
        return result;
    }

    function entries() {
        const result = [];
        for (let bucket of buckets) {
            for (let [k, v] of bucket) result.push([k, v]);
        }
        return result;
    }


    return {
        set,
        get,
        has,
        remove,
        length,
        clear,
        keys,
        values,
        entries
    };
}

export default hashMap;

