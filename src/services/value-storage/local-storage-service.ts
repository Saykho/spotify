import { ValueStorageKeys } from "./value-storage-keys";
import { ValueStorageService } from "./value-storage-service";

export class LocalStorageServiceImpl implements ValueStorageService {
    setItem(key: ValueStorageKeys, value: string): void {
        localStorage.setItem(key, value);
    }

    getItem(key: ValueStorageKeys): string | null {
        return localStorage.getItem(key);
    }

    removeItem(key: ValueStorageKeys): void {
        localStorage.removeItem(key);
    }

    clear() {
        localStorage.clear();
    }
}
