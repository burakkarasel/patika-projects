## merge sort project from patika.dev

1. [16,21,11,8,12,22] => [16,21,11] | [8,12,22] => [16,21] | [11] | [8,12] | [22] => [16] [21] | [11] | [8] [12] | [22] => [16,21] | [11] | [8,12] | [22] => [11,16,21] | [8,12,22] => [8,11,12,16,21,22]

2. her böldügümüzde 2**x = n unit zaman harcıyoruz bu da logn e denk gelir.
   ayrıca her container'ı kontrol ederken de n-1 unit zaman harcarız.
   Big-O = O(nlogn)