class Reverse{
public static void main(String args[]){
int n1=Integer.parseInt(args[0]);
int rev=0;
while (n1>0){
int res=n1%10;
rev=(rev*10)+res;
n1=n1/10;
}
System.out.println(rev);
}
}
