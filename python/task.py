import re
from collections import Counter

def top_k_words(text: str, k: int):
    if k <= 0:
        return []

    words = [word.lower() for word in text.split() ]

    if not words:  
        return []

    word_counts = Counter(words)

    return word_counts
