#include <iostream>
#include <string.h>
using namespace std;

int main()
{

   int count;
   string str;
   cin >> str;

   for(int i = 0; i<str.length(); i++){
       if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
           count = 0;
       }else{
           count++;
       }
   }

   if(count >= 4){
       cout << "NO" << endl;
       break;
   }
}