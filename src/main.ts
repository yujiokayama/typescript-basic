/**
 * 定数、変数、引数、戻り値に型定義するだけの用途にしぼる
 */

/**
 * types
 */

// boolean

const bool: boolean = true;

// number

// string

// any 使わない

// void

/**
 * 戻り値がない場合はvoidを指定
 * @param messaage String メッセージ
 */
const helloMessage = (messaage: string): void => {
  alert(messaage);
};

// Array
const arr: Object[] = [
  {
    id: 1,
    name: 'hoge'
  },
  {
    id: 2,
    name: 'bar'
  }
];

// Object

/**
 * オブジェクトはinterfaceを指定する
 * ?を付けるとundefined(無くてもよい)
 * Type | nullだとkeyは存在していないといけないが、valueはnullでもよい
 */
interface ObjectType {
  id: Number;
  age?: Number;
  name: String | null;
}

const obj: ObjectType = {
  id: 1,
  name: null
};

// undefined

// nullable
