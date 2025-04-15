from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return len(nums) != len(set(nums))
         

# Another Solution:
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        seen = set()  # using a set to store seen numbers
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False
         
        