from collections import Counter
import heapq

class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        # Step 1: Count frequency of each element
        freq_map = Counter(nums)  # like {'1': 3, '2': 2, '3': 1}

        # Step 2: Use heapq.nlargest to get the top k keys by frequency
        return heapq.nlargest(k, freq_map.keys(), key=freq_map.get)
