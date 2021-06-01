/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-05-08 11:48:01
 * @LastEditors: liushuhao
 * @LastEditTime: 2021-05-28 16:49:25
 */
const tree = class {
    data: any
    constructor(data: any) {
        this.data = data;
    }
    public Depthtraverse = (node: any = this.data) => {
        let stack: any[] = [];
        let result: any = [];
        stack.push(node);
        while (stack.length !== 0 ) {
            const item = stack.pop();
            result.push(item);
            const children  = item.children;
            if (children && children.length > 0) {
                for (let i = 0; i < children.length; i += 1) {
                    stack.push(children[i])
                }
            } 
        }
       return result;
    }

    public DepthtraverseNew = (node: any) => {
        let result = [];
        let stack = [];
        stack.push(node)
        while (stack.length !== 0 ) {
            const item  = stack.pop();
            result.push(item);
            if (item.children && item.children.length > 0) {
                 for (let i = 0; i < item.children.length; i += 1) {
                    stack.push(item.children);
                 }
            } 
        }
        return node
    }

    /**
     * @description:  前序遍历
     * @param {any} node
     * @return {*}
     * @author: liushuhao
     */
    public Preordertraversal = (node: any = this.data) =>{
        let result: any = [];
        if (!node) return result;
        let stack: any = [];
        stack.push(node);
        while (stack.length) {
            let item = stack.pop();
            result.push(item.val);
            if (stack.children) {
                for (let i = stack.children.length - 1; i >= 0; i -= 1) {
                    stack.push(stack.children[i]);
                }
            }

        }
        return result;
    }

    public Preordertravernew = (node: any) => {
        if(!node) return []
        let stack: any = [node];
        let result = [];
        while(stack.length) {
            let item = stack.pop();
            if(item.right) {
                stack.push(item.right);
            }
            if (item.left) {
                stack.push(item.left)
            } 
            result.push(item.val)
        }
        return result;
    }

    /**
     * @description: 中序遍历
     * @param {any} node
     * @return {*}
     * @author: liushuhao
     */
    public middleTraverse = (node: any = this.data) => {
        let stack: any = [];
        let result = [];
        // stack.push(node)
        while(node|| stack.length) {
            while (node) {
                stack.push(node);
                node = node.left;
            }
            node = stack.pop();
            result.push(node.val);
            node = node.right;
        }
        return result
    }

    /**
     * @description: 二叉树的翻转
     * @param {any} root
     * @return {*}
     * @author: liushuhao
     */
    public resverse = (root: any) => {
        let stack = [];
        stack.push(root);
        if (!root) return root
        while(stack.length) {
            for (let i = 0; i < stack.length; i++) {
                console.log(JSON.parse(JSON.stringify(stack)));
                let item: any = stack.pop();
                let right = item.right;
                item.right = item.left;
                item.left = right;
                if (item.left) stack.push(item.left)
                if (item.right) stack.push(item.right)
            }
        }
        return root;
    }

    /**
     * @description: 最大深度
     * @param {any} root
     * @return {*}
     * @author: liushuhao
     */
    public maxDepth = (root: any) => {
        let index = 0;
        if (!root) return 0;
        let stack: any = [root];
        while(stack.length) {
            let length = stack.length;
            for (let i = 0; i < length; i += 1) {
                let item = stack.pop();
                if (item.left) stack.push(item.left);
                if (item.right) stack.push(item.right);
            }
            if (stack.length > 0)  index++
        }
        return index;
    }
    /**
     * @description: 最小深度1
     * @param {any} root
     * @return {*}
     * @author: liushuhao
     */
    minDepth1 = function(root: any) {
        if (!root) return 0;
        let stack = [root];
        let index = 1;
        while(stack.length) {
            let length = stack.length;
            for(let i = 0; i< length; i++) {
                let item = stack.shift();
                if (!item.left && !item.right) return index;
                if (item.left) stack.push(item.left);
                if (item.right) stack.push(item.right);
            }
            index++;
        }
    };
    /**
     * @description: 最小深度
     * @param {any} root
     * @return {*}
     * @author: liushuhao
     */
    minDepth(root: any ) {
        if (!root) return 0;
        if (!root.left && !root.right) return 1;
        let maxNumber = Number.MAX_SAFE_INTEGER;;
        if (root.left) maxNumber = Math.min(root.left, maxNumber);
        if (root.right) maxNumber = Math.min(root.right, maxNumber);
        return maxNumber + 1;
    };

    isbalanced (root: any) {
        return this.balanced(root) !== -1;
    }
    /**
     * @description: 是否是平衡二叉树
     * @param {any} root
     * @return {*}
     * @author: liushuhao
     */
     balanced (root: any): any {
        if (!root ) return 0
        let left = this.balanced(root.left);
        let right = this.balanced(root.right);
        if(left === -1 || right === -1 || left - right > 1){
            return -1;
        }
        else {
            return Math.max(left + right) + 1;
        }
    };

    hasPathSum(root: any, sum: number): any {
        // let item = stack.pop();
        // result += item.val;
        // if (result === targetSum)  resultFlag = true;
        // if (item.left) this.hasPathSum(item.left, targetSum);
        // if (item.right) this.hasPathSum(item.right, targetSum);
        if (!root) return false;
        if ( !root.left && !root.right) return sum == root.val;
        return this.hasPathSum(root.left, sum - root.val) 
        || this.hasPathSum(root.right, sum - root.right) 
        // while(stack.length) {
        //     let item = stack.pop();
        //     // result += item.val;
        //     console.log(result, 'llll');
            
        //     if (item.left) stack.push(item.left);
        //     if(item.right) stack.push(item.right);
        //     if (result === targetSum)  {
        //         resultFlag = true;
        //         return
        //     }
        // }
    }

    /**
     * @description: 路径和
     * @param {any} root
     * @param {number} sum
     * @return {*}
     * @author: liushuhao
     */    
    hasPathSumNew(root: any, sum: number): any {
        let stack = [root];
        let valArr = [root.val];
        if (!root) return false;
        while(stack.length) {
            let item = stack.pop();
            let itemval = valArr.pop();
            if (!item.right && !item.left && itemval === sum) {
                return true;
            }
            if (item.left) {
                stack.push(item.left);
                valArr.push(item.left.val + itemval);
            }
            if (item.right) {
                stack.push(item.right);
                valArr.push(item.right.val + itemval);
            }
        }
        return false
    }

    /**
     * @description: 二叉树的最近公共祖先
     * @param {any} root
     * @param {number} p
     * @param {number} q
     * @return {*}
     * @author: liushuhao
     */   
    dealCommonAncestor(node: any, p: any, q: any) {
        while(true) {
            if (p < node.val && q < node.val) {
                node = node.left;
            } else if (p > node.val && q > node.val) {
                node = node.right;
            } else {
                break;
            }
        }
        console.log(node, 'dealCommonAncestor');
        
        return node.val;
    }

    /**
     * @description: 二叉树的所有路径
     * @param {any} node
     * @return {*}
     * @author: liushuhao
     */    
    binaryTreePaths(node: any) {
        const paths: any = [];
        if (!node) return paths;
        let stack = [node];
        let patharr = [node.val.toString()]
        while(stack.length) {
            let item = stack.shift();
            let path = patharr.shift();
            if (!item.left && !item.right) {
                paths.push(path)
            } else {
                if (item.left) {
                    stack.push(item.left);
                    patharr.push(path + '->' + item.left.val.toString())
                }  
                if (item.right) {
                    stack.push(item.right); 
                    patharr.push(path + '->' + item.right.val.toString())
                }
            } 
        }
        return paths

        // const paths: any = [];
        // if (!root) {
        //     return paths;
        // }
        // const node_queue = [root];
        // const path_queue = [root.val.toString()];
    
        // while (node_queue.length) {
        //     const node = node_queue.shift(); 
        //     const path = path_queue.shift();
    
        //     if (!node.left && !node.right) {
        //         paths.push(path);
        //     } else {
        //         if (node.left) {
        //             node_queue.push(node.left);
        //             path_queue.push(path + "->" + node.left.val.toString());
        //         }
    
        //         if (node.right) {
        //             node_queue.push(node.right);
        //             path_queue.push(path + "->" + node.right.val.toString());
        //         }
        //     }
        // }
        // return paths;
    }
}

export { tree }