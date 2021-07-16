var i=0;
function update()
{

    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
    
 
{
i=0;
}
{
    var updatedImage=image[i];
    var updatedName=names[i];
    document.getElementById("family_number_images").src = updatedImage;
    document.getElementById("family_number_names").innerHTML = updatedName;

}

}