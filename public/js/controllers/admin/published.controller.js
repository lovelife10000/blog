/**
 * Created by v_lljunli on 2017/5/10.
 */
app.controller('published', ['$scope', '$http', 'publishedService', function ($scope, $http, publishedService) {

  publishedService.postLimitAndPage(5, 1).then(function success(res) {
    $scope.data = res.data.documentPublishedByLimitAndPage;
    $scope.allPage = res.data.allPage;
    $scope.documentCountNum=res.data.documentCountNum;
  }, function error(res) {

  });


  $scope.limit = '5';
  $scope.currentPage = 1;
  /*
   * 按条件获取文档数据
   * */
  $scope.getPage = function (limit, page) {
    publishedService.postLimitAndPage(limit, page).then(function success(res) {
      $scope.data = res.data.documentPublishedByLimitAndPage;
      $scope.allPage = res.data.allPage;
      $scope.documentCountNum=res.data.documentCountNum;
    }, function error(res) {

    });
    $scope.currentPage = 1;

  };
  /*
   * 单击跳转页面
   * */
  $scope.goToPage = function (limit, page) {
    publishedService.postLimitAndPage(limit, page).then(function success(res) {
      $scope.data = res.data.documentPublishedByLimitAndPage;
      $scope.allPage = res.data.allPage;
      $scope.documentCountNum=res.data.documentCountNum;
      $scope.currentPage = page;
    }, function error(res) {

    });
  };
  /*
   * 删除单篇文档
   * */
  $scope.removeOneDocument = function (doc) {
    $scope.oneDocument = doc;
    $('#remove_one_document_modal').modal({
      keyboard: true
    });

  };
  /*
   * 删除单篇文档提交
   * */
  $scope.removeOneDocumentCommit = function (doc) {


    $scope.document_display={
      name:'1',
    };
    if ($scope.document_display.name == 1) {
      publishedService.putIntoRecycle(doc).then(function success(res) {
        if (res.data.code === 1) {
          $('#remove_one_document_modal').modal('hide');
          $scope.getPage();
        }
      }, function error(res) {

      });
    } else {
      publishedService.removeOneDocument(doc).then(function success(res) {
        if (res.data.code === 1) {
          $('#remove_one_document_modal').modal('hide');
          $scope.getPage();
        }
      }, function error(res) {

      });
    }

  };
  /*
  * 编辑文档
  * */
  $scope.edit=function (doc) {
    window.location.href='/admin/manage/document_manage/edit/'+doc._id;

  };




}]);