type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number // 数据类型 object | string
    createdAt?: string  // 类 / 构造函数
  }
  
  type Tag = {
    id: string;
    name: string;
  }

  type RootState = {
    recordList: RecordItem[],
      tagList: Tag[],
      currentTag?: Tag
  }

  type ChangeNames ={
    oldName: Tag;
    newName: string;
  }