import time
import psutil
import requests
from config import API_KEY, API_ENDPOINT, INTERVAL

def collect_metrics():
    return {
        "cpu": psutil.cpu_percent(interval=1),
        "memory": psutil.virtual_memory().percent,
        "disk": psutil.disk_usage('/').percent
    }

def main():
    print("🚀 Monitoring agent started...")

    while True:
        try:
            data = collect_metrics()
            # headers = {"Authorization": f"Bearer {API_KEY}"}
            res = requests.post(API_ENDPOINT, json=data)
            # res = requests.post(API_ENDPOINT, json=data, headers=headers)

            if res.status_code == 200:
                print(f"[OK] Metrics sent: {data}")
            else:
                print(f"[ERROR] {res.status_code} - {res.text}")

        except Exception as e:
            print("Exception:", str(e))

        time.sleep(INTERVAL)

if __name__ == "__main__":
    main()
