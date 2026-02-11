import cv2
import mediapipe as mp
import time

mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
hands = mp_hands.Hands(
    static_image_mode=False,
    max_num_hands=2,
    min_detection_confidence=0.7,
    min_tracking_confidence=0.5,
)

cap = cv2.VideoCapture(0)
if not cap.isOpened():
    print("Camera neegedsengui!")
    exit()

frame_width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
frame_height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
fps = 20

fourcc = cv2.VideoWriter_fourcc(*"XVID")
out = cv2.VideoWriter("hand_gesture_output.avi", fourcc, fps, (frame_width, frame_height))

RECORD_SECONDS = 5


def count_fingers(hand_landmarks):
    tips = [
        mp_hands.HandLandmark.INDEX_FINGER_TIP,
        mp_hands.HandLandmark.MIDDLE_FINGER_TIP,
        mp_hands.HandLandmark.RING_FINGER_TIP,
        mp_hands.HandLandmark.PINKY_TIP,
    ]
    pips = [
        mp_hands.HandLandmark.INDEX_FINGER_PIP,
        mp_hands.HandLandmark.MIDDLE_FINGER_PIP,
        mp_hands.HandLandmark.RING_FINGER_PIP,
        mp_hands.HandLandmark.PINKY_PIP,
    ]

    count = 0

    # Thumb
    thumb_tip = hand_landmarks.landmark[mp_hands.HandLandmark.THUMB_TIP]
    thumb_ip = hand_landmarks.landmark[mp_hands.HandLandmark.THUMB_IP]
    if thumb_tip.x < thumb_ip.x:
        count += 1

    # Other 4 fingers
    for tip, pip in zip(tips, pips):
        if hand_landmarks.landmark[tip].y < hand_landmarks.landmark[pip].y:
            count += 1

    return count


print(f"Bichleg ehelj baina... {RECORD_SECONDS} sekund")
print("'q' darj zogsooно.")

start_time = time.time()

while cap.isOpened():
    elapsed = time.time() - start_time
    remaining = RECORD_SECONDS - elapsed

    if remaining <= 0:
        print("5 sekund duurslaa! Bichleg hadalaa.")
        break

    ret, frame = cap.read()
    if not ret:
        break

    frame = cv2.flip(frame, 1)
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = hands.process(rgb_frame)

    gesture_text = "Gar oldsongui"

    if results.multi_hand_landmarks:
        for hand_landmarks in results.multi_hand_landmarks:
            mp_drawing.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)

            fingers = count_fingers(hand_landmarks)
            gesture_text = f"Huruunii too: {fingers}"

    # Display info on frame
    cv2.putText(frame, gesture_text, (10, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
    cv2.putText(
        frame,
        f"Uldsen: {remaining:.1f}s",
        (10, 80),
        cv2.FONT_HERSHEY_SIMPLEX,
        0.8,
        (0, 0, 255),
        2,
    )
    cv2.putText(frame, "REC", (frame_width - 80, 40), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

    out.write(frame)
    cv2.imshow("Hand Gesture - 5sec Recording", frame)

    if cv2.waitKey(1) & 0xFF == ord("q"):
        print("Haagdlaa.")
        break

cap.release()
out.release()
cv2.destroyAllWindows()
hands.close()

print("Bichleg hadgalagdsan: hand_gesture_output.avi")
