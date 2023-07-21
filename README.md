# ALPHA Shop

透過 [Create React App](https://github.com/facebook/create-react-app) 建立的Alpha Shop。

目前進行到階段二：初步主畫面渲染。

## 專案畫面
![image](images/screenshot-main.png)

## 產品功能
- 畫面
  - StepProgress：標示「寄送地址、運送方式、付款資訊」三個操作階段
  - Step1：寄送地址表單。
  - Step2：運送方式表單。
  - Step3：付款資訊表單。
  - ProgressControl：「上一步」、「下一步」和「確認下單」的按鈕。

- 僅渲染 Step1 的表單及 ProgressControl 的多個按鈕，尚未執行分頁功能。
- 07/21 更新：
  - 新增右側購物籃元件。
  - 畫面暫時隱藏Step2 & 3及其按鈕。 

## 環境建置
1. 請先確認有安裝 node.js 與 npm。
2. 開啟終端機(Terminal)進入到存放專案的本機位置，執行以下將專案 clone ： 

    ```
    git clone https://github.com/James-Lee-01/3-ALPHA_Shop.git
    ```
3. 進入存放此專案的資料夾，開啟之後，透過終端機輸入：

   ```bash
   npm install
   ```

4. 安裝完畢後，執行程式：
    ```
    npm start
    ```

5. 打開瀏覽器進入到以下網址：`http://localhost:3000` 執行，出現以下訊息則代表成功執行：

   ```bash
   webpack compiled successfully
   ```
    

6. 若欲暫停使用請執行以下：

   ```bash
   ctrl + c
   ```
  
## 開發工具
- React v18.2.0