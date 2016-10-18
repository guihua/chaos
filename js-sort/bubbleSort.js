function bubbleSort(arr) {
    var len = arr.length;

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            //相邻元素两两对比
            if (arr[j] > arr[j + 1]) {
                //元素交换
                var temp = arr[j + 1];

                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}